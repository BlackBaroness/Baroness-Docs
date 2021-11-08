---
sidebar_position: 1
title: Интервал входа
---

Эта функция позволяет запретить игрокам слишком быстро перезаходить на сервер.

Не тратит ресурсы сервера, поэтому рекомендуется использование во избежание спама через релог.

```yaml title="security/connections.yml"
join-cooldown:
  # Включен ли интервал входа?
  enabled: true
  
  # Время в секундах, через которое будет внонь доступен вход.
  time: 2
  
  # Сообщение при отклонении подключения.
  message: '§cВы слишком быстро перезаходите!'
```

