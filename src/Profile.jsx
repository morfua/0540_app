import styles from "./Profile.module.css";

const Profile = (props) => {
  let user =props.function();
  // console.log(user);
	return (
		<div className="row">
			<div className="col-md-3">
				<img
					src={user.avatar}
					alt=""
				/>
			</div>
			<div className="col-md-9">
				<h2>{user.name} {user.lastname}</h2>
				<p className={styles.about}>{user.about}</p>
				<p className={styles.user}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa saepe consectetur
					expedita optio minus? Enim dolorem at doloremque perferendis sunt. Deserunt pariatur vel
					quisquam iusto repellat quam repellendus laudantium!
				</p>
			</div>
		</div>
	);
};
export default Profile;
