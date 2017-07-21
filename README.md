# novi-button

## Install

```
--save novi-button
```

## API

```sh
interface ViewportResizer

attribute Object messages;
attribute Function onClick;
```

* onClick - callback функция, которая вызывается при клике на компонент.
* messages - содержит объект с текстами для отображения внутри кнопки. В рамках компонента используется ключ textContent.

## Data

```sh
interface ViewportResizer

attribute String textContent;
```