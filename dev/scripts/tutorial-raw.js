var CommentBox = React.createClass({displayName: 'CommentBox',
	render: function(){
		return (
			React.createElement('div', {className: "commentBox"},
				"Hello, world! i am a comment box using raw javascript."
			)
		);
	}
});
ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
)