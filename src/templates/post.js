import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'

const PostTemplate = ({ data }) => {
	const { wpPost } = data;
	const { title, content, date, tags, featuredImage, uri, seo } = wpPost
	const imageUrl = featuredImage ? featuredImage.node.sourceUrl : null
	const tagNames = tags ? tags.nodes.map(tag => tag.name) : null;	

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{seo.title}</title>
				<link rel="canonical" href={`https://seguroslidergestion.com${uri}`} />
				<meta name="description" content={seo.metaDesc} />
			</Helmet>
			<main className="pt-15 pt-lg-20 pb-13 pb-md-19 pb-lg-27">
				{ imageUrl && (
					<div
						className="bg-img-1 bg-images mx-lg-13 mx-xl-15 bg-gradient-2"
						style={{ backgroundImage: `url(${imageUrl})`, minHeight: '50vh', backgroundPosition: 'center center' }}
					>
							<div className="container">
							<div className="row">
							</div>
						</div>
					</div>
				)}
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-11">
							{/* job-details-content */}
							<div className="text-center pt-12 pb-0">
								<h2 className="font-size-11 font-weight-bold text-center mb-lg-15 mb-0">
									{ title }
								</h2>
								{	tagNames && (
									<div className="d-inline-flex align-items-center flex-wrap">
										{ tagNames.map(tag => (
											<p className="bg-dark-green-op1 font-size-3 font-weight-medium badge mb-0 py-2 px-4 ml-8">
												<span className="text-dark-green">{ tag }</span>
											</p>
										))}
									</div>
								)}
							</div>
							<div className="offset-lg-1 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0">
								<div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15 font-size-5 heading-default-color" dangerouslySetInnerHTML={{__html: content }}>
								
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id}){
			seo {
				title
				metaDesc
			}
			title
			uri
			excerpt
			content
			date
			tags {
				nodes {
					name
				}
			}
			categories {
				nodes {
					name
				}
			}
			featuredImage {
				node {
					sourceUrl
				}
			}
		}
	}
`


export default PostTemplate