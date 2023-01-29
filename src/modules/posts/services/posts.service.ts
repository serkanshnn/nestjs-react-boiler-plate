import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const postModel = this.postRepository.create(createPostDto);

    return this.postRepository.save(postModel);
  }

  async findAll() {
    const response = await this.postRepository.find();

    return response;
  }

  async findOne(id: number) {
    const response = await this.postRepository.findBy({ id });

    return response;
  }
}
