# env-demo

This project demonstrates how to pass environment variables into a Docker container using a `.env` file.

## Setup

1. **Build the Docker image**

```bash
docker build -t env-demo .
```

2. **Create a `.env` file**

Create a file named `.env` in the project directory with the following content:

```
ABC=123
DEF=456
```

3. **Run the Docker container using the `.env` file**

```bash
docker run --env-file .env env-demo
```

This will load the variables `ABC` and `DEF` from the `.env` file into the container environment.

## Example Dockerfile

```dockerfile
FROM python:3.11.9
COPY app.py .
CMD ["python", "app.py"]
```

## Example Python Script (`app.py`)

```python
import os

abc = os.environ.get('ABC', 'not set')
def_ = os.environ.get('DEF', 'not set')

print(f"ABC: {abc}")
print(f"DEF: {def_}")
```

## Notes

* You can modify the `.env` file to include additional environment variables as needed.
* Make sure your `.env` file is **not** committed to Git if it contains sensitive information — add it to `.gitignore`.
