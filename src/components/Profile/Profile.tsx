import { PROFILE_DIRECTION, ProfileType } from "@utils/types";

interface Props {
  profile: ProfileType;
  direction: PROFILE_DIRECTION;
}

export default function Profile(props: Props) {
  const { profile, direction } = props;

  const renderHorizontal = ({ image, name, position }: ProfileType) => {
    return (
      <div className="flex-row gap-4 flex items-center">
        <div className="flex-shrink-0">
          <a href="#/" className="relative block">
            <img
              alt="profileImage"
              src={image}
              className="mx-auto object-cover rounded-lg h-28 w-28 "
            />
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-h3 text-black-500">{name}</h3>
          <h5 className="text-h5 font-light text-gray-500">{position}</h5>
        </div>
      </div>
    );
  };

  const renderVertical = ({ image, name, position }: ProfileType) => {
    return (
      <>
        <div className="mb-4 opacity-90">
          <a href="#/" className="relative block">
            <img
              alt="profileImage"
              src={image}
              className="mx-auto object-cover rounded-lg h-60 w-60"
            />
          </a>
        </div>
        <div className="text-left">
          <h3 className="text-h3 text-black-500">{name}</h3>
          <h5 className="text-h5 font-light text-gray-500">{position}</h5>
        </div>
      </>
    );
  };

  return (
    <div className="py-4">
      {direction === PROFILE_DIRECTION.horizontal
        ? renderHorizontal(profile)
        : renderVertical(profile)}
    </div>
  );
}
