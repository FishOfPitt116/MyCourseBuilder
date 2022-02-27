from pittapi import course
import structs
import json
		
	# def dept_Code(code, class_type, class_number): 
	# 	courseType = (course.get_courses(code, class_type))
	# 	self.course_no = class_number
	# 	specific_course = courseType.courses[class_number]

#THIS APPROACH ONLY WORKS FOR SPECIFIC DEPARTMENTS AT THE MOMENT

def year_get_json(year, course_code):
	if year < 1900 or year > 2099:
		print("Invalid year. JSON cannot be returned.")
		return None
	term_starter = str(year//1000) + str(year%100)
	merged_graph = structs.Graph(term_starter + '4', course_code)
	fall_graph = structs.Graph(term_starter + '1', course_code)
	for key, value in fall_graph.course_map.items():
		if key not in merged_graph.course_map.keys():
			merged_graph.course_map[key] = value
	for key, value in fall_graph.adjacency_list.items():
		if key not in merged_graph.adjacency_list.keys():
			merged_graph.add_list_ele(key)
		if value is not merged_graph.adjacency_list[key]:
			print(key.course_no)
			for ele in value:
				if ele not in merged_graph.adjacency_list[key]:
					merged_graph.add_node_ele(key, ele)
	print(merged_graph)
	return merged_graph.toJSON()
	
def term_get_json(term, course_code):
	return structs.Graph(term, course_code).toJSON()

print(course.get_subject_codes())

for code in course.get_subject_codes():
	with open("../json/2221_" + code + ".json", "w") as f:
		json.dump(term_get_json("2221", code), f)
	with open("../json/2224_" + code + ".json", "w") as f:
		json.dump(term_get_json("2224", code), f)

'''
universal_graph = Graph('2231', 'CS')
print(universal_graph.toJSON())
with open('test.json', 'w') as f:
	json.dump(universal_graph.toJSON(), f)
'''