import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Marguerite',
      imageUrl: '../assets/marguerite.jpeg',
      username: 'Elegant',
      content: 'Prune marguerite daisies by deadheading spent flowers and cutting away dead foliage to promote new growth and increase the bushiness of the shrubs',
    },

    {
      title: 'Pink Cherry',
      imageUrl: '../assets/pink-cherry-blossoms.jpeg',
      username: 'Beautiful',
      content: 'Cherries have a lot of antioxidants and anti-inflammatory compounds. They might boost your heart health. They could help you sleep.'
    },

    {
      title: 'Rose',
      imageUrl: '../assets/rose.jpeg',
      username: 'Georgeous',
      content: 'Rose petals contain polyphenols, antioxidants that work to protect your body from cell damage. The polyphenols in rose tea have been shown.'
    }
  ];
}
