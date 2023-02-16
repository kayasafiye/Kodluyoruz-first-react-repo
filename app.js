import axios from "axios";
// async function getData(user_id)
// {
//     const {data:users} = await axios("https://jsonplaceholder.typicode.com/users/" +user_id);

//     const {data:posts}= await axios("https://jsonplaceholder.typicode.com/posts?userId=user_id" +user_id);

//     console.log("USERS : ", users);
//     console.log("POSTS : ", posts)

// }
//*Konuyu yeni öğrenmiş biri olarak tanımlamaları takip edip yukarıdaki gibi yaptığımda Post boş dönüyor.Uzun uğraşlar sonucunda aşağıdaki gibi yapınca istenen sonuç çıkıyor

let getData = async (userId) => {
	await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(
		(response) => console.log(response.data)
	);
	axios(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then(
		(response) => console.log(response.data)
	);
};
export default getData;