# 🚀 Docker + WSL2 Setup Cheat Sheet (Windows)

---

## ✅ 2. (Optional) Check VirtualBox VMs and Enable Nested Virtualization

```powershell
VBoxManage list vms
VBoxManage modifyvm "ubuntu" --nested-hw-virt on
```

---

## ✅ 3. Launch Ubuntu WSL and Create User

```powershell
wsl
```

* Inside Ubuntu:
  * Set up default Unix user `stephen`
  * Set a password

---

## ✅ 4. Check Docker CLI Version Inside Ubuntu

```bash
docker --version
```

---

## ✅ 5. Enable Docker Desktop → WSL2 Integration

* Open **Docker Desktop → Settings → Resources → WSL Integration**
* Enable integration for:
  * `Ubuntu`

---

## ✅ 6. Check Containers and Images from Windows (PowerShell)

```powershell
docker ps -a
docker images
```

---

## ✅ 7. List Docker Contexts

```powershell
docker context ls
```

---

## ✅ . Switch to Docker Desktop Context

```powershell
docker context use desktop-linux
```

---

## ✅ 10. Verify Context and Check Again

```powershell
docker context ls
docker ps -a
docker images
```

---

## 💡 Notes

* Docker Desktop → Ubuntu integration is key.
* Use `docker context use desktop-linux` to align CLI with Desktop.
* Always check `docker ps -a` and `docker images` after switching context.

```

```
