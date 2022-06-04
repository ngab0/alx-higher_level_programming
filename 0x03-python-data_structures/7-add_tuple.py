#!/usr/bin/python3
def add_tuple(tuple_a=(), tuple_b=()):
    tuple_a = validate(tuple_a)
    tuple_b = validate(tuple_b)

    return ((tuple_a[0] + tuple_b[0]), (tuple_a[1] + tuple_b[1]))

def validate(tupol=()):
    if len(tupol) < 2:
        if len(tupol) == 1:
            tupol = (tupol[0], 0)
        elif len(tupol) == 0:
            tupol = (0, 0)
    elif len(tupol) > 2:
        tupol = (tupol[0], tupol[1])

    return tupol
