# env-demo

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
CMD ["python", "-c", "import os; print(os.environ)"]
```

## Notes

* You can modify the `.env` file to include additional environment variables as needed.
* Make sure your `.env` file is **not** committed to Git if it contains sensitive information. Add it to `.gitignore`.
