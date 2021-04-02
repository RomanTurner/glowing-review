import React from 'react'
import { Comment } from "semantic-ui-react";

export default function Reviews(props) {
    return (
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={props.userInfo.image} />
          <Comment.Content>
                    <Comment.Author>{`${props.userInfo.firstName} ${props.userInfo.lastName}`}</Comment.Author>
            <Comment.Text>{props.rev}</Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    );
}
