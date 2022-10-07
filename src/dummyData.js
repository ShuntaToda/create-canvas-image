import { uuid } from "./uuid";

export const dummyData = {
  id: uuid(),
  name: "ボード名",
  categories: [
    {
      id: uuid(),
      name: "カテゴリー1",
      tasks: [
        {
          id: uuid(),
          name: "タスク1",
        },
        {
          id: uuid(),
          name: "タスク2",
        },
        {
          id: uuid(),
          name: "タスク3",
        },
      ],
    },
    {
      id: uuid(),
      name: "カテゴリー2",
      tasks: [
        {
          id: uuid(),
          name: "タスク4",
        },
        {
          id: uuid(),
          name: "タスク5",
        },
      ],
    },
    {
      id: uuid(),
      name: "カテゴリー2",
      tasks: [
        {
          id: uuid(),
          name: "タスク4",
        },
        {
          id: uuid(),
          name: "タスク5",
        },
      ],
    },
    {
      id: uuid(),
      name: "カテゴリー2",
      tasks: [
        {
          id: uuid(),
          name: "タスク4",
        },
        {
          id: uuid(),
          name: "タスク5",
        },
      ],
    },
    {
      id: uuid(),
      name: "カテゴリー2",
      tasks: [
        {
          id: uuid(),
          name: "タスク4",
        },
        {
          id: uuid(),
          name: "タスク5",
        },
      ],
    },
    {
      id: uuid(),
      name: "カテゴリー2",
      tasks: [
        {
          id: uuid(),
          name: "タスク4",
        },
        {
          id: uuid(),
          name: "タスク5",
        },
      ],
    },
  ],
};
