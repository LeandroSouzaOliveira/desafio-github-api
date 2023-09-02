import { useNavigate, useParams } from "react-router-dom";
import CardInfo from "../../../components/CardInfo";
import { ProfileDTO } from "../../../models/profile";
import { useEffect, useState } from "react";
import * as profileService from "../../../service/profile-service";

export default function Information() {
  const params = useParams();
  const [profile, setProfiles] = useState<ProfileDTO>();
  const navigate = useNavigate();

  useEffect(() => {
    profileService
      .findProfile(String(params.sendUser))
      .then((response) => {
        setProfiles(response.data);
      })
      .catch(() => {
        navigate("/search/not-found");
      });
  }, []);

  return <section>{profile && <CardInfo profile={profile} />}</section>;
}
