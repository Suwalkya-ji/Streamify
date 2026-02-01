import { Link } from "react-router-dom";
import { LANGUAGE_TO_FLAG } from "../constants";

const FriendCard = ({ friend }) => {
  if (!friend) return null;

  return (
    <div className="card bg-base-200 transition-all hover:shadow-lg">
      <div className="card-body p-4">

        {/* USER INFO */}
        <div className="mb-3 flex items-center gap-3">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-base-300">
            <img
              src={friend.profilePic}
              alt={friend.fullName}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h3 className="truncate font-semibold">{friend.fullName}</h3>
      </div>


        {/* LANGUAGES */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          <span className="badge badge-secondary text-xs">
            {getLanguageFlag(friend.nativeLanguage)}
            Native: {friend.nativeLanguage}
          </span>

          <span className="badge badge-outline text-xs">
            {getLanguageFlag(friend.learningLanguage)}
            Learning: {friend.learningLanguage}
          </span>
        </div>

        {/* ACTION */}
        <Link
          to={`/chat/${friend._id}`}
          className="btn btn-outline btn-sm w-full"
        >
          Message
        </Link>
      </div>
    </div>
  );
};

export default FriendCard;

/* --------------------------------------------- */
/* HELPERS                                       */
/* --------------------------------------------- */

export function getLanguageFlag(language) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[langLower];

  if (!countryCode) return null;

  return (
    <img
      src={`https://flagcdn.com/24x18/${countryCode}.png`}
      alt={`${langLower} flag`}
      className="mr-1 inline-block h-3"
      loading="lazy"
    />
  );
}
