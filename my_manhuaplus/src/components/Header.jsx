
function Header(){
   return(
    <>
<header className="header-background">
  <div className="max-w mra mla grid gtc-header aic gg-30 section" id="header">
    <div className="widget Header" id="WebNav">
      <div className="menu">
        <button className="c-fff bn bt p-13 mobileMenu" aria-label="Menu">
          <i className="fa-solid fa-bars fs-25" />
        </button>
      </div>
      <div className="flex aic md:jcc">
        <a className="header-image-wrapper" href="/">
          <img
            alt="ManhuaPlus"
            data-original-height={516}
            data-original-width={1600}
            src="https://manhuaplus.org/uploads/images/logo.png"
          />
        </a>
      </div>
      <div className="flex aic mla search">
        <div className="mb-menu dropdown">
          <label className="block c-fff" htmlFor="user-mb">
            <i className="fa-solid fa-circle-user fs-25" />
          </label>
          <input
            className="dropMenu hidden"
            id="user-mb"
            name="user-mb"
            type="checkbox"
          />
          <ul className="pl-0 lsn bg-171 c-999-a p-y7x15-a block-a userMenu">
            <li>
              <span className="sun no-rotate">
                <i className="fa-solid fa-sun" />
                Light Mode
              </span>
              <span className="moon no-rotate" style={{ display: "none" }}>
                <i className="fa-solid fa-moon" />
                Dark Mode
              </span>
            </li>
            <li data-modal="open" data-target="#login-modal">
              <a href="#">
                <i className="fa-solid fa-user" />
                Login
              </a>
            </li>
            <li data-modal="open" data-target="#register-modal">
              <a href="#">
                <i className="fa-solid fa-user-plus" />
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="search" style={{ display: "none" }}>
        <div className="right nav-a dropdown">
          <button className="c-fff bn bt p-13 mobileMenu" aria-label="Menu">
            <i className="fa-solid fa-bars fs-25" />
          </button>
          <label className="block c-fff" htmlFor="user-mb">
            <i className="fa-solid fa-circle-user fs-25" />
          </label>
          <input
            className="dropMenu hidden"
            id="user-mb"
            name="user-mb"
            type="checkbox"
          />
          <ul className="pl-0 lsn bg-171 c-999-a p-y7x15-a block-a userMenu">
            <li>
              <span className="sun no-rotate">
                <i className="fa-solid fa-sun" />
                Light Mode
              </span>
              <span className="moon no-rotate" style={{ display: "none" }}>
                <i className="fa-solid fa-moon" />
                Dark Mode
              </span>
            </li>
            <li data-modal="open" data-target="#login-modal">
              <a href="#">
                <i className="fa-solid fa-user" />
                Login
              </a>
            </li>
            <li data-modal="open" data-target="#register-modal">
              <a href="#">
                <i className="fa-solid fa-user-plus" />
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="widget PageList" id="MenuBox" style={{}}>
      <nav className="widget-content nav-a">
        <div className="bg_se show-mb" style={{ textAlign: "center" }}>
          <form
            className="form"
            action="https://manhuaplus.org/search"
            method="get"
          >
            <div className="bg_wr bg_fl bg_lh">
              <button className="bg_su" type="submit">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
              <input
                className="bg_in bg_lh bg_fo"
                placeholder="Search mangas..."
                type="search"
                defaultValue=""
                autoComplete="off"
                name="keyword"
              />
              <button className="bg_re" style={{ display: "none" }}>
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="bg_co" style={{ display: "none" }}>
              <div className="mw-500 bg_ra">
                <ul className="results" />
              </div>
            </div>
          </form>
        </div>
        <ul className="flex m-0 lsn fdc pl-0">
          <li className="dropdown">
            <label className="block pr-15 pl-15 lh-60 c-fff" htmlFor="genresList">
              Genres
              <i className="fas fa-caret-down" />
            </label>
            <input
              className="dropMenu hidden"
              id="genresList"
              name="dropDown"
              type="checkbox"
            />
            <ul className="pl-0 lsn bg-171 c-999-a p-y7x15-a block-a genresList">
              <li>
                <a href="https://manhuaplus.org/genres/action" title="Action">
                  Action
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/adaptation"
                  title="Adaptation"
                >
                  Adaptation
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/adult" title="Adult">
                  Adult
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/adventure"
                  title="Adventure"
                >
                  Adventure
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/aliens" title="Aliens">
                  Aliens
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/animals" title="Animals">
                  Animals
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/award-winning"
                  title="Award Winning"
                >
                  Award Winning
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/blood" title="Blood">
                  Blood
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/cartoon" title="Cartoon">
                  Cartoon
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/comedy" title="Comedy">
                  Comedy
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/cooking" title="Cooking">
                  Cooking
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/crime" title="Crime">
                  Crime
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/delinquents"
                  title="Delinquents"
                >
                  Delinquents
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/demons" title="Demons">
                  Demons
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/drama" title="Drama">
                  Drama
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/dungeons"
                  title="Dungeons"
                >
                  Dungeons
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/ecchi" title="Ecchi">
                  Ecchi
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/fantasy" title="Fantasy">
                  Fantasy
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/fighting"
                  title="Fighting"
                >
                  Fighting
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/full-color"
                  title="Full Color"
                >
                  Full Color
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/genderswap"
                  title="Genderswap"
                >
                  Genderswap
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/ghosts" title="Ghosts">
                  Ghosts
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/gore" title="Gore">
                  Gore
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/gyaru" title="Gyaru">
                  Gyaru
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/harem" title="Harem">
                  Harem
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/historical"
                  title="Historical"
                >
                  Historical
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/horror" title="Horror">
                  Horror
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/isekai" title="Isekai">
                  Isekai
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/live-action"
                  title="Live action"
                >
                  Live action
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/loli" title="Loli">
                  Loli
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/long-strip"
                  title="Long Strip"
                >
                  Long Strip
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/mafia" title="Mafia">
                  Mafia
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/magic" title="Magic">
                  Magic
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/magical-girls"
                  title="Magical Girls"
                >
                  Magical Girls
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/manhua" title="Manhua">
                  Manhua
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/manhwa" title="Manhwa">
                  Manhwa
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/martial-arts"
                  title="Martial Arts"
                >
                  Martial Arts
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/mature" title="Mature">
                  Mature
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/mecha" title="Mecha">
                  Mecha
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/medical" title="Medical">
                  Medical
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/military"
                  title="Military"
                >
                  Military
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/monster-girls"
                  title="Monster Girls"
                >
                  Monster Girls
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/monsters"
                  title="Monsters"
                >
                  Monsters
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/music" title="Music">
                  Music
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/mystery" title="Mystery">
                  Mystery
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/official-colored"
                  title="Official Colored"
                >
                  Official Colored
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/op-mc" title="Op-Mc">
                  Op-Mc
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/philosophical"
                  title="Philosophical"
                >
                  Philosophical
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/police" title="Police">
                  Police
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/post-apocalyptic"
                  title="Post-Apocalyptic"
                >
                  Post-Apocalyptic
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/psychological"
                  title="Psychological"
                >
                  Psychological
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/reincarnation"
                  title="Reincarnation"
                >
                  Reincarnation
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/returner"
                  title="Returner"
                >
                  Returner
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/revenge" title="Revenge">
                  Revenge
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/romance" title="Romance">
                  Romance
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/ruthless-protagonist"
                  title="Ruthless Protagonist"
                >
                  Ruthless Protagonist
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/school-life"
                  title="School Life"
                >
                  School Life
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/sci-fi" title="Sci-Fi">
                  Sci-Fi
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/seinen" title="Seinen">
                  Seinen
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/shounen" title="Shounen">
                  Shounen
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/shounen-ai"
                  title="Shounen Ai"
                >
                  Shounen Ai
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/slice-of-life"
                  title="Slice of life"
                >
                  Slice of life
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/smart-mc"
                  title="Smart MC"
                >
                  Smart MC
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/sports" title="Sports">
                  Sports
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/superhero"
                  title="Superhero"
                >
                  Superhero
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/supernatural"
                  title="Supernatural"
                >
                  Supernatural
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/survival"
                  title="Survival"
                >
                  Survival
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/thriller"
                  title="Thriller"
                >
                  Thriller
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/time-travel"
                  title="Time Travel"
                >
                  Time Travel
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/traditional-games"
                  title="Traditional Games"
                >
                  Traditional Games
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/tragedy" title="Tragedy">
                  Tragedy
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/vampires"
                  title="Vampires"
                >
                  Vampires
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/video-games"
                  title="Video Games"
                >
                  Video Games
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/villainess"
                  title="Villainess"
                >
                  Villainess
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/virtual-reality"
                  title="Virtual Reality"
                >
                  Virtual Reality
                </a>
              </li>
              <li>
                <a
                  href="https://manhuaplus.org/genres/web-comic"
                  title="Web Comic"
                >
                  Web Comic
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/webtoon" title="Webtoon">
                  Webtoon
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/wuxia" title="Wuxia">
                  Wuxia
                </a>
              </li>
              <li>
                <a href="https://manhuaplus.org/genres/zombies" title="Zombies">
                  Zombies
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <label
              className="block pr-15 pl-15 lh-60 c-fff"
              htmlFor="dropmenu2"
            >
              Ranking
              <i className="fas fa-caret-down" />
            </label>
            <input
              className="dropMenu hidden"
              id="dropmenu2"
              name="dropDown"
              type="checkbox"
            />
            <ul className="pl-0 lsn bg-171 c-999-a p-y7x15-a block-a">
              <li>
                <a href="https://manhuaplus.org/ranking/day">Top Day</a>
              </li>
              <li>
                <a href="https://manhuaplus.org/ranking/week">Top Week</a>
              </li>
              <li>
                <a href="https://manhuaplus.org/ranking/month">Top Month</a>
              </li>
              <li>
                <a href="https://manhuaplus.org/ranking/love">Favorite</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="block pr-15 pl-15 lh-60 c-fff"
              href="https://manhuaplus.org/filter"
            >
              Advanced Search
            </a>
          </li>
          <li>
            <a
              className="block pr-15 pl-15 lh-60 c-fff show-mb"
              href="javascript:void(0)"
              rel="tag"
              data-modal="open"
              data-target="#login-modal"
            >
              Bookmark
            </a>
          </li>
          <li>
            <a
              className="block pr-15 pl-15 lh-60 c-fff show-mb"
              href="javascript:void(0)"
              rel="tag"
              data-modal="open"
              data-target="#login-modal"
            >
              History
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="widget BlogSearch hide-mb" id="SearchBox">
      <div className="flex aic fdc" role="search">
        <div className="flex fdcr aic hide-mb mr-13">
          <label className="block modeSwitch">
            <i className="fas fa-sun sun no-rotate" />
            <i
              className="fas fa-moon moon no-rotate"
              style={{ display: "none" }}
            />
          </label>
        </div>
        <div className="bg_se mr-13" style={{ textAlign: "center" }}>
          <form
            className="form"
            action="https://manhuaplus.org/search"
            method="get"
          >
            <div className="bg_wr bg_fl bg_lh">
              <button className="bg_su" type="submit">
                <i className="fas fa-magnifying-glass" />
              </button>
              <input
                className="bg_in bg_lh bg_fo"
                placeholder="Search mangas..."
                type="search"
                defaultValue=""
                autoComplete="off"
                name="keyword"
              />
              <button className="bg_re" style={{ display: "none" }}>
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="bg_co" style={{ display: "none" }}>
              <div className="bg_ra">
                <ul className="results"></ul>
              </div>
            </div>
          </form>
        </div>
        <div className="mr-13 nav-a hide-mb dropdown">
          <label className="block c-fff" htmlFor="user-pc">
            <i className="fas fa-circle-user fs-27" />
          </label>
          <input
            className="dropMenu hidden"
            id="user-pc"
            name="user-pc"
            type="checkbox"
          />
          <ul className="pl-0 lsn bg-171 c-999-a p-y7x15-a block-a userMenu">
            <li data-modal="open" data-target="#login-modal">
              <a href="#">
                <i className="fas fa-user mr-7" />
                Login
              </a>
            </li>
            <li data-modal="open" data-target="#register-modal">
              <a href="#">
                <i className="fas fa-user-plus mr-7" />
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>

    </>
   )
}

export default Header