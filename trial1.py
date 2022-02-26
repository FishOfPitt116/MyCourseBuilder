from pittapi import course

class Node:
	def __init__(self):
		self.dept_code = ""# str
		self.course_no = "" # str
		self.course_name = "" # str
		self.description = ""  #str
		self.preqs = None # List[(Node, bool)]
		self.completed = False # bool
	
	def __init__(self, course.obj):
		self.dept_code = course_obj.subject_code
		self.course_no = course.obj.course_number
		self.course_title = course.obj.course_title
	
		self.completed = False
