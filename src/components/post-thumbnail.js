import * as React from "react";
import { Link, useStaticQuery } from "gatsby";

const PostThumbnail = ({ post }) => {
    // const result = useStaticQuery()
    return (
        <article className="post-thumbnail">
            <div className="aspect-ratio-wrapper">
                <Link
                    className="post-thumbnail__link"
                    to={`${__dirname}${post.slug}`}
                >
                    <div className="post-thumbnail__content">
                        <h1 className="post-thumbnail__title">{post.title}</h1>
                    </div>
                    <img
                        className="post-thumbnail__image"
                        src={post.featured}
                        alt=""
                    />
                </Link>
            </div>
        </article>
    );
};

export default PostThumbnail;
