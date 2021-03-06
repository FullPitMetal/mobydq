from datetime import datetime

def get_test_case_name():
    """Generate unique name for unit test case."""
    # If not unique enough, replace with an uuid
    test_case_name = 'test ' + datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")
    return test_case_name
