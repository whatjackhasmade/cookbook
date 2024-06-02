"use client";

export default function Login() {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				alert("Login");
			}}
		>
			<fieldset>
				<legend>Login</legend>
				<label>
					Email
					<input type="email" />
				</label>
				<label>
					Password
					<input type="password" />
				</label>
				<button type="submit">Login</button>
			</fieldset>
		</form>
	);
}
