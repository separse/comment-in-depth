import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  constructor() { }
  getData() { 
    return [
      [
        {title: 'Post 1', summary: 'lllllooooooooordddddddddddddddddddd offfffffffffffffffffff tttttttttheeeeeeee rrrrrrrrrrrrinnnnnnnnnnnnnnnnnnggggggggggg'},
        {title: 'Post 2', summary: 'gggggggggggggggggggggggggggggggggggggggggggtttttttttttttttttttttttttttttttttttttaaaaaaaaaaaaaaaaaa'},
        {title: 'Post 3', summary: 'ttttttttttttttthhhhhhhhhhhhhhheeeeeeeeeeeeee wwwwwwwwwwwwwiiiiiiiiitttttttttcccccccccccchhhhhhhhhhhhheeeeeeeerrrrrrrrrrr'}
      ],
      [
        {title: 'Post 4', summary: 'mmmmmmortsal ccccommmmmmbattttttttt'},
        {title: 'Post 5', summary: 'jjjjjjjjjjjoooooooookkkkkkkkkkkeeeeeeeeeeerrrrrrrrrrr'},
        {title: 'Post 6', summary: 'ddddddddaaaaaaaaarrrrrrrrrrrrkkkkkk kknnnnnnniiiiiiiiiggggggghhhhhhhhhhhtttt'}
      ],
      [
        {title: 'Post 7', summary: 'nnnnnnnnneeeeeeeeeeddddddddd fffffffffffoooooooorrrrrrrr ssssspppppppppeeeeeeeeeddddddddddd'},
        {title: 'Post 8', summary: 'nnnnnnnnnnnnnnnnnnnnnnnnnbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},
        {title: 'Post 9', summary: 'dddddddddddeeeeeeeeeeeeeeeaaaaaaaaaaaatttttttttttttthhhhhhhhhh rrrrrrrrraaaaaaaaaaccccccccceeeeeeeee'}
      ]
    ];
  }
}
