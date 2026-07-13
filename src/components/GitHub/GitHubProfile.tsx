import { motion } from "framer-motion";
import GlassCard from "../UI/GlassCard";
import { useEffect, useState } from "react";

type GithubData = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
};

export default function GitHubProfile() {
  const username = "Manaswi2004";

  const [user, setUser] = useState<GithubData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then(setUser);
  }, []);

  if (!user) return null;

  return (
    <GlassCard>

      <div className="flex flex-col md:flex-row items-center gap-8">

        <motion.img
          whileHover={{ scale: 1.05 }}
          src={user.avatar_url}
          alt={user.name}
          className="w-36 h-36 rounded-full border-4 border-indigo-500"
        />

        <div className="flex-1">

          <h2 className="text-3xl font-bold">
            {user.name}
          </h2>

          <p className="text-indigo-400 mt-1">
            @{user.login}
          </p>

          <p className="text-gray-400 mt-4 leading-7">
            {user.bio}
          </p>

          <div className="grid grid-cols-3 gap-6 mt-8">

            <div>

              <h1 className="text-3xl font-bold text-indigo-400">
                {user.public_repos}
              </h1>

              <p className="text-gray-500">
                Repositories
              </p>

            </div>

            <div>

              <h1 className="text-3xl font-bold text-indigo-400">
                {user.followers}
              </h1>

              <p className="text-gray-500">
                Followers
              </p>

            </div>

            <div>

              <h1 className="text-3xl font-bold text-indigo-400">
                {user.following}
              </h1>

              <p className="text-gray-500">
                Following
              </p>

            </div>

          </div>

          <a
            href={user.html_url}
            target="_blank"
            className="
            inline-block
            mt-8
            px-6
            py-3
            rounded-xl
            bg-indigo-600
            hover:bg-indigo-500
            transition
            "
          >
            Visit GitHub
          </a>

        </div>

      </div>

    </GlassCard>
  );
}