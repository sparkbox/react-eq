# React Element Queries

__NOTE: This is a very early beta.__

We liked the way that https://github.com/Snugug/eq.js handled element queries, but we needed something that would work inside of our React components. This implements a similar interface to his implementation.

Usage:
```
<ElementQuery queries={{ medium: 600, large: 900 }} >
  <div>
    ◻️ ◽️ ◼︎ I'll act differently at 600px and 900px. ◼︎ ◽️ ◻️
  </div>
</ElementQuery>
```

Result when 600px <= element width < 900px:
```
<div data-eq-state="medium">
  ◻️ ◽️ ◼︎ I'll act differently at 600px and 900px. ◼︎ ◽️ ◻️
</div>
```

Result when element width >= 900px:
```
<div data-eq-state="medium large">
  ◻️ ◽️ ◼︎ I'll act differently at 600px and 900px. ◼︎ ◽️ ◻️
</div>
```
