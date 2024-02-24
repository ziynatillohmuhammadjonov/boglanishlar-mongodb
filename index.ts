import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose.connect('mongodb://localhost/virtualDars').then(()=>{
  console.log('MongoDb ga ulanish hosil qildim...');
  
}).catch((err)=>{
  console.log('MongoDbga ulanishda xato ketdi ' + err);
  
})
// dotenv.config();

// const app: Express = express();
// const port = process.env.PORT || 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });
// interface iAuthor  {
//   firstName: string,
//   lastName: string,
//   email: string
// }
// interface iBook{
//   title: string
//   authorId: mongoose.Schema.Types.ObjectId
// }
// const Author = mongoose.model('Author', new mongoose.Schema<iAuthor>({
//   firstName:{type:String, required: true},
//   lastName:{type: String, required: true},
//   email:{type: String, required: true}
// }))
// const Book = mongoose.model('Book', new mongoose.Schema<iBook>({
//   title: {type:String, required: true},
//   authorId:{type:mongoose.Schema.Types.ObjectId, ref: "Author"}
// }))

// async function creatAuthor(firstName:string, lastName:string, email:string) {
//     const author = new Author({
//       firstName,lastName,email
//     })
//     const saveAuthor = await author.save()
//     console.log(saveAuthor);
    
// }
// async function createBook(title:string, authorId: string) {
//   const book = new Book({
//     title, authorId,
//   })
//   const saveBook = await book.save()
//   console.log(saveBook);
  
  
// }

// async function listsBook (){
//   const books = await Book
//   .find()
//   .populate('authorId', 'firstName -_id')//bunda populateni birinchi qiymatiga book schemada kelgan o'zgaruvchi ikkinchisiga esa bizga kerak bo'lgan barcha qiymatlar kiritiladi
//   .select('title authorId')
//   console.log(books);
  
// }

// // creatAuthor('Zayniddin',"Ziydan","zidan@gmail.com")
// // createBook('Node js qollanma', '65d9730154716616085a4a6e')
// listsBook()






interface iAuthor {
  firstName: string,
  lastName: string,
  email: string
}
interface iBook {
  title: string
  authorId: mongoose.Schema.Types.ObjectId
}

const authorSchema = new mongoose.Schema<iAuthor>({
  firstName:{type:String, required:true},
  lastName:{type:String, required: true},
  email:{type:String, required:true}
})
const bookSchema = new mongoose.Schema<iBook>({
  title: { type: String, required: true },
  authorId:{type:authorSchema, required:true}
})

const Author = mongoose.model("Author", authorSchema)
const Book = mongoose.model("Book", bookSchema)

async function createBook(title:string, authorId:iAuthor) {
  const book = new Book({
    title, authorId
  })
  const saveBook = book.save()
  console.log(saveBook);
  
}

async function listBook() {
    const books = await Book
    .find()
    // .select('title authorId')
  console.log(books);
  
}

// createBook('Nextjs qollanma',
// new Author({
//   firstName: 'Ziynatilloh',
//   lastName: "Muhammadjonov",
//   email: 'zmorzugrand@gmail.com'
// })
// )
listBook()

