from pittapi import course

class Node:
	def __init__(self): # default constructor: Node()
		self.dept_code = ""# str
		self.course_no = "" # str
		self.course_name = "" # str
		self.description = ""  #str
		self.preqs = None # List[(Node, bool)]
		self.completed = False # bool
	
	def __init__(self, course_obj): # overload constructor: Node(course_obj)
		self.dept_code = course_obj.subject_code
		self.course_no = course_obj.course_number
		self.course_title = course_obj.course_title
		section_details = course.get_extra_section_details(section=course_obj.sections[0], term=course_obj.sections[0].term, class_number=self.course_no)
		self.description = section_details.description

		self.completed = False

	def __str__(self):
		return self.dept_code + self.course_no + self.course_title + self.description

		
	def dept_Code(code, class_type, class_number): 
		courseType = (course.get_courses(code, class_type))
		self.course_no = class_number
		specific_course = courseType.courses[class_number]


def fillDict(term, dept_code):
	dict = {} 
	for num, obj in course.get_courses(term, dept_code).courses.items():
		dict[num] = Node(obj)
		print(str(dict[num]))
	return dict

fillDict('2231', 'CS')

# pitt_object = Node()

# def sectionDescriptions(section, term, class_number):
# 	sectionDet = course.get_extra_section_details(section, term, class_number)
# 	Node.description = sectionDet.description

# anyCourse = (course.get_courses("2231", "CS")).courses['0007']

# print(pitt_object(sectionDescriptions(anyCourse.sections[0], '2231', '0007')))
#for i in dict: 

# sectionDet = SectionDetails(NamedTuple)
	
