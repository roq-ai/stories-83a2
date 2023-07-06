import { UserInterface } from 'interfaces/user';
import { PublisherInterface } from 'interfaces/publisher';
import { GetQueryInterface } from 'interfaces';

export interface StoryInterface {
  id?: string;
  title: string;
  content: string;
  genre: string;
  release_date: any;
  reads?: number;
  writer_id?: string;
  editor_id?: string;
  publisher_id?: string;
  created_at?: any;
  updated_at?: any;

  user_story_writer_idTouser?: UserInterface;
  user_story_editor_idTouser?: UserInterface;
  publisher?: PublisherInterface;
  _count?: {};
}

export interface StoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  genre?: string;
  writer_id?: string;
  editor_id?: string;
  publisher_id?: string;
}
