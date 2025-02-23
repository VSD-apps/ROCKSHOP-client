interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Logo({ className = '', style }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1000 250"
      className={`${className} fill-current w-full h-full`}
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'auto',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        ...style,
      }}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          style={{ opacity: 0.926 }}
          d="M 155.5,36.5 C 175.207,36.0761 194.874,36.5761 214.5,38C 231.751,46.3118 240.585,60.1451 241,79.5C 241.167,93.8333 241.333,108.167 241.5,122.5C 241.605,139.529 241.105,156.529 240,173.5C 236.846,189.661 227.679,200.828 212.5,207C 192.164,210.315 171.831,210.315 151.5,207C 137.536,201.701 128.369,191.867 124,177.5C 122.882,159.032 122.382,140.532 122.5,122C 122.382,103.468 122.882,84.9681 124,66.5C 128.888,50.4414 139.388,40.4414 155.5,36.5 Z M 164.5,68.5 C 176.171,68.3335 187.838,68.5001 199.5,69C 203.333,70.1667 205.833,72.6667 207,76.5C 207.667,106.833 207.667,137.167 207,167.5C 205.5,171.667 202.667,174.5 198.5,176C 187.5,176.667 176.5,176.667 165.5,176C 160.333,174.833 157.167,171.667 156,166.5C 155.333,136.833 155.333,107.167 156,77.5C 157.714,73.2898 160.547,70.2898 164.5,68.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.926 }}
          d="M 786.5,36.5 C 806.207,36.0761 825.874,36.5761 845.5,38C 862.751,46.3118 871.585,60.1451 872,79.5C 872.938,110.861 872.604,142.194 871,173.5C 866.659,195.175 853.492,207.009 831.5,209C 819.167,209.667 806.833,209.667 794.5,209C 770.808,206.308 757.308,193.141 754,169.5C 753.049,135.47 753.383,101.47 755,67.5C 759.476,50.8562 769.976,40.5228 786.5,36.5 Z M 795.5,68.5 C 807.171,68.3335 818.838,68.5001 830.5,69C 834.333,70.1667 836.833,72.6667 838,76.5C 838.667,107.167 838.667,137.833 838,168.5C 836.108,172.058 833.275,174.558 829.5,176C 818.5,176.667 807.5,176.667 796.5,176C 791.333,174.833 788.167,171.667 787,166.5C 786.333,136.833 786.333,107.167 787,77.5C 788.714,73.2898 791.547,70.2898 795.5,68.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.941 }}
          d="M -0.5,37.5 C 27.1687,37.3334 54.8353,37.5 82.5,38C 95.7048,40.8698 104.538,48.7031 109,61.5C 110.984,79.8373 110.984,98.1707 109,116.5C 105.594,127.573 98.4274,135.073 87.5,139C 97.4578,161.403 106.958,183.903 116,206.5C 115.5,207 115,207.5 114.5,208C 104.167,208.667 93.8333,208.667 83.5,208C 73.6305,186.418 64.1305,164.584 55,142.5C 47.253,141.518 39.4197,141.185 31.5,141.5C 31.6666,163.503 31.5,185.503 31,207.5C 20.5001,208.822 10.0001,208.822 -0.5,207.5C -0.5,150.833 -0.5,94.1667 -0.5,37.5 Z M 31.5,69.5 C 44.8375,69.3334 58.1708,69.5001 71.5,70C 74.4281,71.2598 76.2614,73.4265 77,76.5C 77.9168,85.9091 77.5835,95.2424 76,104.5C 74.4571,106.378 72.6238,107.878 70.5,109C 57.5043,109.5 44.5043,109.667 31.5,109.5C 31.5,96.1667 31.5,82.8333 31.5,69.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.92 }}
          d="M 286.5,37.5 C 311.5,37.5 336.5,37.5 361.5,37.5C 361.666,47.5056 361.5,57.5056 361,67.5C 360.5,68 360,68.5 359.5,69C 338.833,69.3333 318.167,69.6667 297.5,70C 293.512,71.4476 291.012,74.2809 290,78.5C 289.333,107.5 289.333,136.5 290,165.5C 291.068,170.235 293.901,173.402 298.5,175C 319.406,175.173 340.24,175.673 361,176.5C 361.667,186.5 361.667,196.5 361,206.5C 360.5,207 360,207.5 359.5,208C 338.5,208.667 317.5,208.667 296.5,208C 276.225,206.611 263.392,196.111 258,176.5C 256.867,158.375 256.367,140.208 256.5,122C 256.367,103.792 256.867,85.625 258,67.5C 262.275,52.3949 271.775,42.3949 286.5,37.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.923 }}
          d="M 376.5,37.5 C 387.5,37.5 398.5,37.5 409.5,37.5C 409.333,58.8359 409.5,80.1693 410,101.5C 425.167,80.3333 440.333,59.1667 455.5,38C 467.847,37.1674 480.18,37.3341 492.5,38.5C 474.623,64.4206 456.623,90.254 438.5,116C 456.938,145.946 475.604,175.779 494.5,205.5C 494.023,206.478 493.357,207.311 492.5,208C 481.167,208.667 469.833,208.667 458.5,208C 444.292,186.42 430.459,164.587 417,142.5C 414.277,145.557 411.944,148.89 410,152.5C 409.667,170.833 409.333,189.167 409,207.5C 398.333,208.833 387.667,208.833 377,207.5C 376.5,150.834 376.333,94.1676 376.5,37.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.924 }}
          d="M 515.5,37.5 C 543.833,37.5 572.167,37.5 600.5,37.5C 600.82,48.0821 600.487,58.5821 599.5,69C 577.167,69.3333 554.833,69.6667 532.5,70C 529.676,76.7945 530.01,83.4612 533.5,90C 550.956,99.8035 568.623,109.137 586.5,118C 594.863,122.695 600.697,129.528 604,138.5C 606,155.833 606,173.167 604,190.5C 600.79,202.36 592.957,208.193 580.5,208C 554.167,208.667 527.833,208.667 501.5,208C 499.537,197.423 498.87,186.59 499.5,175.5C 522.836,175.667 546.169,175.5 569.5,175C 570,174.5 570.5,174 571,173.5C 571.937,165.063 571.604,156.73 570,148.5C 552.868,138.35 535.368,128.85 517.5,120C 500.691,110.64 494.024,96.3068 497.5,77C 496.379,66.2167 498.213,56.05 503,46.5C 506.651,42.609 510.818,39.609 515.5,37.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.927 }}
          d="M 620.5,37.5 C 631.5,37.5 642.5,37.5 653.5,37.5C 653.5,58.8333 653.5,80.1667 653.5,101.5C 670.167,101.5 686.833,101.5 703.5,101.5C 703.5,80.1667 703.5,58.8333 703.5,37.5C 714.5,37.5 725.5,37.5 736.5,37.5C 736.833,94.1706 736.5,150.837 735.5,207.5C 725.167,208.833 714.833,208.833 704.5,207.5C 703.5,182.842 703.167,158.176 703.5,133.5C 686.833,133.5 670.167,133.5 653.5,133.5C 653.667,158.169 653.5,182.836 653,207.5C 642.53,208.824 632.03,208.824 621.5,207.5C 620.5,150.837 620.167,94.1706 620.5,37.5 Z"
        />
      </g>
      <g>
        <path
          style={{ opacity: 0.939 }}
          d="M 999.5,60.5 C 999.5,79.8333 999.5,99.1667 999.5,118.5C 997.144,123.364 994.144,127.864 990.5,132C 985.945,135.445 980.945,138.112 975.5,140C 957.881,141.43 940.214,141.93 922.5,141.5C 922.667,163.169 922.5,184.836 922,206.5C 921.5,207 921,207.5 920.5,208C 910.256,208.819 900.09,208.652 890,207.5C 889.5,150.834 889.333,94.1676 889.5,37.5C 917.502,37.3334 945.502,37.5 973.5,38C 986.087,41.0945 994.754,48.5945 999.5,60.5 Z M 922.5,69.5 C 935.837,69.3334 949.171,69.5001 962.5,70C 964.333,71.1667 965.833,72.6667 967,74.5C 969,84.1667 969,93.8333 967,103.5C 965.833,106 964,107.833 961.5,109C 948.504,109.5 935.504,109.667 922.5,109.5C 922.5,96.1667 922.5,82.8333 922.5,69.5 Z"
        />
      </g>
    </svg>
  );
}
