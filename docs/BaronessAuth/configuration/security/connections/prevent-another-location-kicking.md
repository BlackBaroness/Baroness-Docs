---
sidebar_position: 3
title: Защита от "you logged in from another location"
---

Сервер, если входит игрок с ником, который уже занят другим игроком, кикает игрока с причиной "you logged in from another location". 

Эта функция позволяет не впускать игрока, если его ник занят.

```yaml title="security/connections.yml"
prevent-another-location-kicking:
  # Включена ли защита?
  enabled: true
  
  # Сообщение при отклонении подключения.
  message: '§cИгрок с таким ником уже онлайн!'
```


