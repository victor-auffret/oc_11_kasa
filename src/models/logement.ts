interface IHost {
 name: string;
 picture: string;
}

class Logement {

 id: string;
 title: string;
 cover: string;
 pictures: Array<string>
 description: string;
 host: IHost;
 rating: number;
 location: string;
 equipments: Array<string>
 tags: Array<string>

 constructor(
  id: string,
  title: string,
  cover: string,
  pictures: Array<string>,
  description: string,
  host: IHost,
  rating: number | string,
  location: string,
  equipments: Array<string>,
  tags: Array<string>
 ) {
  this.id = id;
  this.title = title;
  this.cover = cover;
  this.pictures = pictures;
  this.description = description;
  this.host = host,
   this.rating = Number(rating)
  this.location = location;
  this.equipments = equipments;
  this.tags = tags;
 }
}

export type { IHost };
export { Logement };
