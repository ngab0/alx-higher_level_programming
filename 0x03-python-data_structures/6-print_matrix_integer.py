#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    if matrix:
        for elements in matrix:
            i = 1
            length = len(elements)

            for elem in elements:
                if i == length:
                    print('{:d}'.format(elem), end='')
                else:
                    print('{:d}'.format(elem), end='')
                i += 1

            print()
