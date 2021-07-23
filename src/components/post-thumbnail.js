import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const PostThumbnail = ({ post }) => {
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
                    <GatsbyImage
                        className="post-thumbnail__image"
                        image={post.featured.childImageSharp.gatsbyImageData}
                        alt={post.featured_alt}
                    />
                </Link>
            </div>
        </article>
    );
};

export default PostThumbnail;
