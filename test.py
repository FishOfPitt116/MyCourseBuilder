from pittapi import course

CScourses = (course.get_courses("2231", "CS"))
cs_0007 = CScourses.courses['0007']
sectionDet = course.get_extra_section_details(section=cs_0007.sections[0] , term="2231", class_number="0007")
#sectionDet = course.get_section_details('2231', cs_0007.sections[0].class_number)
print(sectionDet)
#print(cs_0007)
