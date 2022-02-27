from pittapi import course
import structs
import json
		
	# def dept_Code(code, class_type, class_number): 
	# 	courseType = (course.get_courses(code, class_type))
	# 	self.course_no = class_number
	# 	specific_course = courseType.courses[class_number]

#THIS APPROACH ONLY WORKS FOR SPECIFIC DEPARTMENTS AT THE MOMENT

fallGraph = structs.Graph('2221', 'CS')
springGraph = structs.Graph('2224', 'CS')

'''
def toJSON(): 
	mergedGraph
# ADD MERGE GRAPH JSON
'''

mergedGraph = structs.Graph() # MergeGraph(springGraph.dept_code) # None
mergedGraph.adjacency_list = fallGraph.adjacency_list
mergedGraph.course_map = fallGraph.course_map 
for key, val in springGraph.adjacency_list.items(): # key = Node	value = List[Node]
	if key.course_no not in mergedGraph.course_map.keys():	# if 
		mergedGraph.course_map[key.course_no] = key
		mergedGraph.adjacency_list[key] = []
		for node in val:
			print("node: " + str(node))
			mergedGraph.adjacency_list[key].append(node)
	else:
		for node in springGraph.adjacency_list[key]:
			if node not in mergedGraph.adjacency_list[key]:
				mergedGraph.adjacency_list[key].append(n)
	
print(str(mergedGraph))

'''
universal_graph = Graph('2231', 'CS')
print(universal_graph.toJSON())
with open('test.json', 'w') as f:
	json.dump(universal_graph.toJSON(), f)
'''