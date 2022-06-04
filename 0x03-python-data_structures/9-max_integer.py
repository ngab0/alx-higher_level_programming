#!/usr/bin/python3
def max_integer(my_list=[]):
    if len(my_list) == 0:
        return None
    else:
        maxi = my_list[0]
        for i in my_list:
            if my_list[i] > maxi:
                maxi = my_list[i]
        return maxi
