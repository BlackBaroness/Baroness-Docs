---
sidebar_position: 1
title: База данных
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

BaronessAuth позволяет вам выбрать базу данных и легко настроить подключение к ней.

Подход к каждой базе данных у нас индивидуальный, с учётом особенностей каждой из них. Это позволяет выжать максимум производительности.

Все базы делятся на 2 типа:
- Локальные. Не требуют настройки, сохраняются в файл.
- Удалённые. Требуют настройку и находятся вне сервера.

:::tip Доступные базы данных
```mdx-code-block
<Tabs
defaultValue="HSQLDB"
values={[
{label: "HSQLDB", value: "HSQLDB"},
{label: "MySQL", value: "MySQL"},
{label: "PostgreSQL", value: "PostgreSQL"},
{label: "SQLite", value: "SQLite"},
]}>

<TabItem value="HSQLDB">
```
**Локальная.**

Написана полностью на Java.

Крайне производительна, из-за чего является прекрасной заменой удалённым базам данных, если вам не нужна сама удалённость.
```mdx-code-block
</TabItem>

<TabItem value="MySQL">
```
**Удалённая.**

Очень известная база данных, которую использовал практически каждый, работающий с SQL.

Достаточно простая в освоении и сама по себе хороша.
```mdx-code-block
</TabItem>

<TabItem value="PostgreSQL">
```
**Удалённая.**

Используемая в серьёзном продакшне база данных, обладающая хорошей производительностью и большим функционалом.

Трудна в освоении, в сравнении с MySQL.
```mdx-code-block
</TabItem>

<TabItem value="SQLite">
```
**Локальная.**

**Не рекомендована к использованию: низкая производительность.**

Очень популярная простая локальная база данных. 

Ощутимо проигрывает HSQLDB по всем параметрам, из-за чего мы рекомендуем использовать её только если нужна именно она.
```mdx-code-block
</TabItem>
</Tabs>
```
:::

```yaml title="data/database.yml"
# Название выбранной базы данных.
database: HSQLDB

connection:
  # Адрес (IP).
  address: 'localhost'
  
  # Указывать ли порт при подключении?
  specify-port: false
  
  # Порт.
  port: 3306
  
  # Имя базы данных.
  db-name: 'db'
  
  # Пользователь.
  user: 'root'
  
  # Пароль.
  password: 'password'
  
  # Аргументы подключения.
  # Не трогайте, если не разбираетесь.
  args:
    - 'serverTimezone=Europe/Moscow'
    - 'autoReconnect=true'
    - 'useSSL=false'

data:
  # Название таблицы с данными.
  table: 'ba_users'

# Должен ли BaronessAuth выключать сервер, если подключение не удалось?
shutdown-on-fail: true

# Должен ли BaronessAuth сбрасывать сессии при подключении?
reset-sessions: true
```