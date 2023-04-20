import { defineStore } from "pinia";
interface blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imgUrl: string;
}
export const useBlogsData = defineStore("BlogsData", {
  state: () => ({
    blogs: [
      {
        id: 1,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 2,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 3,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 4,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 5,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 6,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 7,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 8,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 9,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 10,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 11,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 12,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 13,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 14,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 15,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 16,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 17,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 18,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 19,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 20,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 21,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 22,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 23,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 24,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 25,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 26,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 27,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 28,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 29,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 30,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 31,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 32,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },

      {
        id: 33,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 34,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 35,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 36,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 37,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 38,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 39,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 40,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 41,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 42,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 43,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 44,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 45,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 46,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 47,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 48,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },

      {
        id: 49,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 50,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 51,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 52,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 53,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 54,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 55,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 56,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 57,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 58,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 59,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 60,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 61,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 62,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 63,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 64,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },

      {
        id: 65,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 66,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 67,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 68,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 69,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 70,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 71,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 72,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 73,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 74,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 75,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 76,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 77,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 78,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 79,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 80,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 81,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 82,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 83,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 84,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 85,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 86,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 87,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 88,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 89,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 90,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 91,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 92,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 93,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 94,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 95,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 96,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },

      {
        id: 97,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 98,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 99,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 100,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 101,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 102,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 103,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 104,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 105,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 106,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 107,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 108,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 109,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 110,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 111,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 112,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },

      {
        id: 113,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 114,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 115,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 116,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Design",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 117,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 118,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 119,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 120,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Product",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 121,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 122,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 123,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 124,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Software Development",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 125,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 126,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 127,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
      {
        id: 128,
        title: "How collaboration makes us better designers",
        content:
          "Collaboration can make our teams stronger, and our individual designs better.",
        author: "Natali Craig",
        date: "14 Jan 2022",
        category: "Customer Success",
        imgUrl:
          "https://fastly.picsum.photos/id/814/592/280.jpg?hmac=NPlp2YQCL5-eRTRXc75k8G6JfUc9Ue1WoZgmBRVmbCQ",
      },
    ] as blog[],
    category: "View all",
    page: 1,
    blogPerPage: window.innerWidth >= 768 ? 8 : 6,
    blogPerRow: window.innerWidth >= 768 ? 2 : 1,
  }),
  getters: {
    getBlogs(state) {
      const blogs: blog[] =
        state.category === "View all"
          ? state.blogs.slice(
              (this.page - 1) * this.blogPerPage,
              this.page * this.blogPerPage
            )
          : state.blogs
              .filter((blog) => blog.category === state.category)
              .slice(
                (this.page - 1) * this.blogPerPage,
                this.page * this.blogPerPage
              );
      return blogs;
    },
    getPageNumbers(state) {
      const n: number = Math.ceil(state.blogs.length / state.blogPerPage);
      return n;
    },
    getPaginationNumbers(state) {
      const n: number = this.getPageNumbers;
      if (n <= 6) {
        return [...Array(n + 1).keys()].slice(1);
      } else {
        if (state.page <= 2) {
          return [...[...Array(4).keys()].slice(1), n - 2, n - 1, n];
        } else if (state.page > 2 && state.page <= n - 4) {
          return [state.page - 1, state.page, state.page + 1, n - 2, n - 1, n];
        } else {
          return [n - 5, n - 4, n - 3, n - 2, n - 1, n];
        }
      }
    },
  },

  actions: {
    changeCategory(category: string) {
      this.category = category;
    },

    changePage(p: number) {
      this.page = p;
    },
  },
});
