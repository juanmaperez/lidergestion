import React from 'react'

function TextContent({className, content}) {
	return (
		<div className={className} >
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="offset-lg-1 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0">
							<div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15 font-size-5 heading-default-color" dangerouslySetInnerHTML={{__html: content }}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TextContent