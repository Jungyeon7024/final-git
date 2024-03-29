package lm.swith.user.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data

public class GithubUser {
	private Long user_no; //sequence
	private String email; //email
	private String password;//pw
	private String username;//real name
	private String nickname;//nickname
	private byte[] user_profile;//profile img
	private String img;
	private String useraddress;//address
	private String user_introduction;//introduction
	private String role;// authorization(user / admin) kakao,github
	
	
	public GithubUser(Long user_no, String email, String password, String username, String nickname,
			byte[] user_profile,String img, String useraddress, String user_introduction, String role
			) {
				this.user_no = user_no;
				this.email = email;
				this.password = password;
				this.username = username;
				this.nickname = nickname;
				this.user_profile = user_profile;
				this.img = img;
				this.useraddress = useraddress;
				this.user_introduction = user_introduction;
				this.role = role;
				
				
		}
}
