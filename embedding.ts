import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/virtualDars').then(() => {
  console.log('MongoDb ga ulanish hosil qildim...');

}).catch((err) => {
  console.log('MongoDbga ulanishda xato ketdi ' + err);

})

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
}

createBook('Nextjs qollanma',
new Author({
  firstName: 'Ziynatilloh',
  lastName: "Muhammadjonov",
  email: 'zmorzugrand@gmail.com'
})
)