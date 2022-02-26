from pittapi import course
import json

class Node:
	def __init__(self): # default constructor: Node()
		self.dept_code = ""# str
		self.course_no = "" # str
		self.course_name = "" # str
		self.description = ""  #str
		self.preqs = None # List[(Node, bool)]
		self.completed = False # bool
	
	def __init__(self, course_obj): # overloaded constructor: Node(course_obj)
		self.dept_code = course_obj.subject_code
		self.course_no = course_obj.course_number
		self.course_title = course_obj.course_title
		self.section_details = course.get_extra_section_details(section=course_obj.sections[0], term=course_obj.sections[0].term, class_number=self.course_no)
		self.description = self.section_details.description
		self.completed = False

	def __str__(self):
		return self.dept_code + " " + self.course_no

	def toJSON(self):
		return {
			"dept_code" : self.dept_code,
			"id" : self.course_no, # can change back to course_no, would need to modify js code
			"course_title" : self.course_title,
			"description" : self.description,
			"completed" : self.completed
		}
		
	# def dept_Code(code, class_type, class_number): 
	# 	courseType = (course.get_courses(code, class_type))
	# 	self.course_no = class_number
	# 	specific_course = courseType.courses[class_number]

class Graph:
	# Adjacency list where key is parent node (prereq) and value is list of nodes (courses that need prereq)
	def __init__(self, term, dept_code):
		self.adjacency_list = {}
		self.course_map = self.fill_dict(term, dept_code)

	# Add parent node as prereq (list of nodes is initially empty) (Ex: Add 445 node to graph)
	def add_list_ele(self, node):
		self.adjacency_list[node] = []

	# Add node to adjacency list of specific prereq (Ex: Add 1501 node to 445 prereq)
	def add_node_ele(self, prereq, node):
		self.adjacency_list[prereq].append(node)

	# Print (key, value) pair --> prereq, list of dependent nodes
	def __str__(self):
		output = ""
		for key, val in self.adjacency_list.items():
			output += "{" + str(key) + " : ["
			for node in val:
				output += str(node) + ", "
			output += "]}\n"
		return output

	# Fill dictionary with courses in particular term and department
	def fill_dict(self, term, dept_code):
		# Maps course_num to node containing course_obj
		dict = {} 

		# Iterate thru course_num and course_obj of courses in a specific term/department
		for num, obj in course.get_courses(term, dept_code).courses.items():
			if int(num) >= 2000:
				return dict

			# If valid, map course_num to node (course_obj)
			try:
				dict[num] = Node(obj)
			except:
				print("type error on class", num)
				continue
			
			# Add node to graph (no dependent nodes yet)
			self.add_list_ele(dict[num])

			# Ex: "CS" has length 2, preqs_string of "441" has full str of all prereqs (needs to be parsed)
			dept_code_len = len(dept_code)
			preqs_string = dict[num].section_details.preqs

			for i in range(len(preqs_string)-dept_code_len):
				# Do not account for ands/ors
				if preqs_string[i] == ';':
					break
				# Matches dept_code --> Ex: 1501 --> (CS 0441 or CS 0406) and (CS 0445 or CS 0455 or COE 0445), match "CS" so code is "0441", "0406", etc
				if preqs_string[i:i+dept_code_len] == dept_code:
					code = preqs_string[i+dept_code_len+1:i+dept_code_len+5]
					# Add 1501 node (dependent) to 445 parent (prereq) in dict
					if code in dict:
						self.add_node_ele(dict[code], dict[num])
		return dict

	def toJSON(self):
		nodes = []
		for entry in self.course_map.values():
			nodes.append(entry.toJSON())
		links = []
		for key, value in self.adjacency_list.items():
			for ele in value:
				links.append({"source":key.course_no, "target":ele.course_no})
		# return {
		# 	"nodes" : [ entry.toJSON() for entry in course_map.values() ],
		# 	"links" : [ { "source": key, "target": value.course_no} for key, value in adjacency_list.items() ]
		# }
		return { "nodes" : nodes, "links" : links }


universal_graph = Graph('2231', 'CS')
print(universal_graph.toJSON())
with open('test.json', 'w') as f:
	json.dump(universal_graph.toJSON(), f)