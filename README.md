Практическое задание (актуальная версия находится в ветке dev)
Реализовать REST API сервис для работы с палитрами цветов.

Требования к методам сервиса

- Метод регистрации. Должен принимать имя, логин и пароль пользователя.
- Метод входа. Принимает логин и пароль пользователя и представляет токен доступа для пользователя
- Методы для работы с палитрами: получение коллекции палитр, получение палитры по идентификатору, создание палитры, изменение палитры, удаление палитры. Пользователь может работать только с его палитрами.
- Методы для работы с цветами: получение коллекции цветов по идентификатору палитры, получение цвета по идентификатору, создание цвета, изменение цвета, удаление цвета. Цвета существуют только в рамках палитр. Пользователь может работать только с его палитрами.

Описание сущностей.
 

Пользователь

- Идентификатор
- Имя
- Логин
- Пароль

Палитра

- Идентификатор
- Название. Устанавливается пользователем при создании или изменении.

Цвет

- Идентификатор
- Идентификатор палитры
- HEX цвета. Устанавливается пользователем при создании или изменении.
- Название. Генерируется автоматически на основании HEX при создании или изменении.

Дополнительно
- К проекту должен быть подключен Swagger
- Для определения названия цвета можете воспользоваться сервисом https://www.thecolorapi.com/
- Желательно, чтобы был настроен docker для быстрого локального запуска проекта
