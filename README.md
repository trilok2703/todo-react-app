# React + Vite

This is Todo App demo.

# App screenshot

<img width="1914" height="961" alt="image" src="https://github.com/user-attachments/assets/18fa93a5-4480-4d79-95d8-cf085b4ee8d2" />



## Application Architecture

```text
                    ┌─────────────┐
                    │   App.jsx   │
                    └──────┬──────┘
                           │
                           ▼
                 ┌──────────────────┐
                 │  NotesProvider   │
                 │  (Context API)   │
                 └────────┬─────────┘
                          │
          ┌───────────────┼────────────────┐
          │               │                │
          ▼               ▼                ▼
     CreateArea        NoteList           Header
          │               │
          │               ▼
          │             Note
          │
          └────── uses Context ──────┘

       State + Actions are managed
             by NotesProvider