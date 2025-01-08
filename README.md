# Vietnamese Dictionary API

> [!IMPORTANT]
> **This repository was created for the purpose of testing APIs. It serves no other purpose**
## Base Url
```url
https://vietnamese-dictionary-api.vercel.app/api/
```
## 📌 Route API
### 🔍 Search word 
- **Method:** `GET`
- **Endpoint:** <br>
```url

/api/search?word={word}

```
- **Response**
```json
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
```json
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
