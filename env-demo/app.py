import os

# Get environment variables with default fallback
abc = os.environ.get('ABC', 'not set')
def_ = os.environ.get('DEF', 'not set')

print(f"ABC: {abc}")
print(f"DEF: {def_}")
