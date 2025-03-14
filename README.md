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
### 🔗 Related next words
- **Method:** `GET`
- **Endpoint:** <br>
```url
/api/search?word={word}&next=true
```
- **Response**
```json
{
  "text": "nhân tố",
  "valid": true,
  "next": [
    "tố cáo",
    "tố chất",
    "tố cộng",
    "tố giác",
    "tố hộ",
    "tố khổ",
    "tố lan",
    "tố lốc",
    "tố nga",
    "tố nữ",
    "tố tâm",
    "tố tụng"
  ]
}
```

```url
/api/search?word={word}&next=true&suggestion=true&limit=4
```

- **Response**
```json
{
  "text": "nhân tố",
  "valid": true,
  "suggestions": [],
  "next": [
    "tố cáo",
    "tố chất",
    "tố cộng",
    "tố giác",
  ]
}
```
