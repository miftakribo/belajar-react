var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
				<Comment author="Pete Hunt">This is one Comment</Comment>
				<Comment author="Jordan Walke">This is *another* Comment</Comment>
			</div>
		);
	}
});

ReactDOM.render(
	<CommentList />,
	document.getElementById('content')
);