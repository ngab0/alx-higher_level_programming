#!/usr/bin/python3
<<<<<<< HEAD
# 101-locked_class.py
# Sazi A. Ndwandwe
"""Defines a locked class."""


class LockedClass:
    """
    Prevent the user from instantiating new LockedClass attributes
    for anything but attributes called 'first_name'.
    """

    __slots__ = ["first_name"]
=======
class LockedClass(object):
    __slots__ = 'first_name'
>>>>>>> 9f945a0143cc2734a13a083947970f7dcb8e3f2f
