# Vietnamese-dictionary-api

> [!IMPORTANT]
> **This repository was created for the purpose of testing APIs. It serves no other purpose**
## Base Url
```url
vietnamese-dictionary-api.vercel.app/
```
## 📌 Route API
### 🔍 Search word 
- **Method:** `GET`
- **Endpoint:** <br>
```url

/api/search?word={word}

```
- **Response**
```url
{
  "text": "bệnh",
  "valid": true,
}
```
### 🔗 Related words
- **Method:** `GET`
- **Endpoint:** <br>
```url
/api/search?word={word}&suggestion=true
```
- **Response**
```url
{
  "text": "bệnh",
  "valid": true,
  "suggestions": [
    "bệnh nhân",
    "bệnh hoạn",
    "bệnh tật",
    "bệnh viện",
    "bệnh lý"
  ]
}
```
