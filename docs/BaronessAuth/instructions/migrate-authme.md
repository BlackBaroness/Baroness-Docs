---
sidebar_position: 2
title: Миграция с AuthMe
---

Для миграции с AuthMe используется субкоманда [/auth migrate](https://docs.baronessdev.ru/BaronessAuth/configuration/adminCommands/migrate).

**Перед миграцией, проверьте следующее:**

1. AuthMe имеет версию [5.6.0-beta2](https://github.com/AuthMe/AuthMeReloaded/releases/tag/5.6.0-beta2). Другие версии не факт, что будут работать.
2. AuthMe включён. Если вы его трогали плагинами вроде Plugman, перезагрузите сервер/BaronessAuth.
3. AuthMe подключён к действующей базе данных. Все его настройки относительно базы данных верны.
4. BaronessAuth подключён к той базе данных, куда надо перенести аккаунты.

:::caution Обратите внимание
Использование низко производительных баз данных может вызывать зависания сервера во время миграции.
Ваша база данных считается таковой, если BaronessAuth сообщает об этом при запуске.
:::

:::danger Важно!
На данный момент поддерживается только SHA256 алгоритм хеширования.
:::

Введите `/auth migrate authme`, все логи о процессе будут отображены в консоли сервера. AuthMe будет автоматически выключен перед миграцией.