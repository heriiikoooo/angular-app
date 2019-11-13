import { Component } from '@angular/core';
import { PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
    providers: [PostsService]
})
export class UserComponent  {
    name: string; 
    email: string;
    address: address;
    hobbies:string[];
    showHobbies:boolean;
    posts:Post[];

    constructor(private postsService: PostsService){
      this.name = 'Jericho Manalo'; 
      this.email = 'sampleuser@gmail.com';
      this.address = {
        street: 'Mars st.',
        city: 'Golden Country',
        province: 'Batangas'
      }
      this.hobbies = ['RPG', 'Basketball', 'Swimming'];
      this.showHobbies = false;

      this.postsService.getPosts().subscribe(posts =>{
        this.posts = posts;
        console.log(posts);
      })


    }

    toggleHobbies(){
      if(this.showHobbies == true){
        this.showHobbies = false
      }
      else{
        this.showHobbies = true;
      }
    }
    
    addHobby(hobby){
      this.hobbies.push(hobby);
    }

    deleteHobby(i){
      this.hobbies.splice(i, 1);
    }
}

interface address{
  street: String;
  city: string;
  province: string, 
}
interface Post{
  id: number;
  title:string;
  body:string;
}


