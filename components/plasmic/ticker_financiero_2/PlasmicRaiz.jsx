// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7ohE9m1KJEeAHDFYwqA6ae
// Component: SyueVwckDS0Y
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  set as $stateSet,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";
import { Ticker } from "../../registerTicker"; // plasmic-import: iYDUPC7Vnd00/codeComponent
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 7ohE9m1KJEeAHDFYwqA6ae/projectcss
import sty from "./PlasmicRaiz.module.css"; // plasmic-import: SyueVwckDS0Y/css

createPlasmicElementProxy;

export const PlasmicRaiz__VariantProps = new Array();

export const PlasmicRaiz__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRaiz__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "stocks",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [
          {
            name: "Grupo Aeroportuario Centro Norte",
            symbol: "OMAB",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGEXYWNQpVC47cX_ez-GrZhtrOxoo0tkoJg&s"
          },
          {
            name: "Grupo Bimbo",
            symbol: "BIMBOA",
            image:
              "https://www.bmv.com.mx/docs-pub/GESTOR/IMAGENES_EMISORAS/5163.png"
          },
          {
            name: "Grupo Elektra",
            symbol: "ELEKTRA",
            image:
              "https://www.revistaporte.com/wp-content/uploads/2017/10/Elektra-1.jpg"
          },
          {
            name: "Grupo Industrial Saltillo",
            symbol: "GISSAA",
            image:
              "https://vanguardia.com.mx/binrepository/1152x898/0c125/1152d648/down-right/11604/DLFI/gissa-211011_VG2867176_MG8075146.jpg"
          },
          {
            name: "Grupo M\u00e9xico",
            symbol: "GMEXICOB",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8eAQ7ESBjd1Fyy9D4JGJ-ajyPLhWLL233rA&s"
          },
          {
            name: "Grupo Nacional Provincial",
            symbol: "GNP",
            image: "https://kayum.mx/wp-content/uploads/2019/09/logo-GNP.jpeg"
          },
          {
            name: "Grupo Posadas",
            symbol: "POSADASA",
            image:
              "https://habitatmx.com/wp-content/uploads/2017/07/GrupoPosadas.jpg"
          },
          {
            name: "Organizaci\u00f3n Soriana, S.A.B. de C.V.",
            symbol: "SORIANAB",
            image:
              "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F842e771c-00fe-44dc-a5e2-f379ced3dd25_750x350.jpeg"
          },
          {
            name: "Grupo Carso, S.A.B. de C.V.",
            symbol: "GCARSO/A1",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iVUAJ3uRYsPIineD_FiglfgbN6o45miiq_fce9cTT1Eu1Sf8sMl63GQakjQDjsjXHnI&usqp=CAUg"
          },
          {
            name: "Megacable Holdings, S.A.B. de C.V.",
            symbol: "MEGA/CPO",
            image:
              "https://paquetesmegacable.mx/wp-content/uploads/2021/10/Megacable-1024x596.jpg"
          },
          {
            name: "Gruma, S.A.B. de C.V.",
            symbol: "GRUMA/B",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBiTqRzg8hPi2kFTunNZPLJcQT1qKClV3AC1S9NTpUal37fddhdSJ7A5uZwciGQEC-vs&usqp=CAU"
          },
          {
            name: "Promotora y Operadora de Infraestructura, S.A.B. de C.V.",
            symbol: "PINFRA",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHPCSCrhQnw6mYcWn5EcErBhN7nCDn33jiQ&s"
          },
          {
            name: "Alsea, S.A.B. de C.V.",
            symbol: "ALSEA",
            image:
              "https://roastbrief.com.mx/wp-content/uploads/2024/07/logo_alsea_jpg.jpg"
          },
          {
            name: "Grupo Financiero Banorte, S.A.B. de C.V.",
            symbol: "GFNORTE/O",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_A5PqtFw8yIecxmK5qQq5YVqo9ev5pSkhw&s"
          },
          {
            name: "Fomento Econ\u00f3mico Mexicano, S.A.B. de C.V",
            symbol: "FEMSAUBD",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/b/b1/Coca-Cola_Femsa_Logo.png"
          },
          {
            name: "Wal-Mart de M\u00e9xico",
            symbol: "WALMEX",
            image:
              "https://roastbrief.com.mx/wp-content/uploads/2024/05/cf9ae791-walmart-logo-promo.png"
          },
          {
            name: "Grupo Aeroportuario del Pac\u00edfico, S.A.B. de C.V",
            symbol: "GAPB",
            image:
              "https://pbs.twimg.com/profile_images/1765875755181850624/HX0fVusQ_400x400.jpg"
          },
          {
            name: "CEMEX, S.A.B. de C.V",
            symbol: "CEMEXCPO",
            image:
              "https://www.cemexmexico.com/documents/27057941/74856328/new_cemex_logo.jpeg/2a23d8e0-9ca4-666d-ad3a-a30fd2729e6c"
          },
          {
            name: "AMERICA MOVIL, S.A.B. DE C.V.",
            symbol: "XAMXL",
            image:
              "https://www.casosexitosos.com/wp-content/themes/yootheme/cache/b1/logo_telmex-b12bba39.jpeg"
          },
          {
            name: "Controladora Vuela Compa\u00f1\u00eda de Aviaci\u00f3n, S.A.B. DE C.V.",
            symbol: "VOLARA",
            image:
              "https://photos.prnewswire.com/prnfull/20150325/194587LOGO?max=200"
          },
          {
            name: "AMAZON COM INC",
            symbol: "AMZN",
            image:
              "https://www.serfadu.com/wp-content/uploads/2020/10/amazon-1024x571.png"
          },
          {
            name: "ARCA CONTINENTAL SAB DE CV",
            symbol: "AC",
            image:
              "https://enalimentos.lat/images/noticias/2024-1/Arca_Continental_completa_emisin_exitosa_de_bonos_en_Mxico.jpg"
          },
          {
            name: "EL PUERTO DE LIVERPOOL SAB DE CV",
            symbol: "LIVEPOL/C-",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIrdLKhWikq05IeFxYhhYqU8nHLmj3IPZdw&s"
          },
          {
            name: "INTERNATIONAL BUS MACH CORP",
            symbol: "IBM",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREK3ySgdEH2lnUOZ0Ls-3VlXx8okATu9qlLWTzAa56E9gCdAkuxgA5E_es1-qG727dj5w&usqp=CAU"
          },
          {
            name: "Grupo Aeroportuario del Sureste, S.A.B. de C.V",
            symbol: "ASURB",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXAsB2taVbufpvWIRLxzajGm8p7U-vm-EVUyhMJgcSWa9c8Ew7wd2-yqDG7N6RiP6GUM&usqp=CAU"
          },
          {
            name: "Alibaba Group Holding Limited",
            symbol: "BABAN",
            image:
              "https://media.zenfs.com/en/us.finance.gurufocus/44de8fab854464d03d3c2ee1c8e917c6"
          },
          {
            name: "BECLE SAB DE CV",
            symbol: "CUERVO",
            image: "https://s3-symbol-logo.tradingview.com/becle--600.png"
          },
          {
            name: "FACEBOOK INC",
            symbol: "FB",
            image:
              "https://w7.pngwing.com/pngs/555/467/png-transparent-facebook-inc-monthly-active-users-blog-like-button-facebook-blue-company-text.png"
          },
          {
            name: "GENTERA SAB DE CV",
            symbol: "GENTERA",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrEKgzTQJGhpB6kG2JUNE18u6gYMB3erSMg&s"
          }
        ]
      },
      {
        path: "loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicRaiz.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicRaiz.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicRaiz.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"mainSection"}
        data-plasmic-override={overrides.mainSection}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.mainSection
        )}
      >
        {(() => {
          try {
            return (() => {
              return !$state.loading;
            })();
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <div
            data-plasmic-name={"body"}
            data-plasmic-override={overrides.body}
            className={classNames(projectcss.all, sty.body)}
          >
            <Ticker
              className={classNames("__wab_instance", sty.ticker__vND5)}
              data={(() => {
                try {
                  return $state.stocks;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()}
              delay={0}
              speed={50}
            />

            <Ticker
              className={classNames("__wab_instance", sty.ticker__m1Qmj)}
              data={(() => {
                try {
                  return $state.stocks;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()}
              delay={28.4}
              speed={50}
            />

            <Ticker
              className={classNames("__wab_instance", sty.ticker__w6YjM)}
              data={(() => {
                try {
                  return $state.stocks;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()}
              delay={56.8}
              speed={50}
            />
          </div>
        ) : null}
        <SideEffect
          data-plasmic-name={"initialData"}
          data-plasmic-override={overrides.initialData}
          className={classNames("__wab_instance", sty.initialData)}
          onMount={async () => {
            const $steps = {};
            $steps["setLoading"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["loading"]
                    },
                    operation: 0,
                    value: true
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["setLoading"] != null &&
              typeof $steps["setLoading"] === "object" &&
              typeof $steps["setLoading"].then === "function"
            ) {
              $steps["setLoading"] = await $steps["setLoading"];
            }
            $steps["getRequest"] = true
              ? (() => {
                  const actionArgs = {
                    continueOnError: true,
                    dataOp: {
                      sourceId: "92JZh6Z3SEQTH384YxYJC1",
                      opId: "c39c85b4-6f25-4519-9a3a-387c9aaf23b2",
                      userArgs: {
                        params: [
                          (() => {
                            let symbols = [];
                            $state.stocks.map(i =>
                              symbols.push(`${i.symbol}.XMEX`)
                            );
                            return symbols.join(",");
                          })()
                        ]
                      },
                      cacheKey: null,
                      invalidatedKeys: null,
                      roleId: null
                    }
                  };
                  return (async ({ dataOp, continueOnError }) => {
                    try {
                      const response = await executePlasmicDataOp(dataOp, {
                        userAuthToken: dataSourcesCtx?.userAuthToken,
                        user: dataSourcesCtx?.user
                      });
                      await plasmicInvalidate(dataOp.invalidatedKeys);
                      return response;
                    } catch (e) {
                      if (!continueOnError) {
                        throw e;
                      }
                      return e;
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["getRequest"] != null &&
              typeof $steps["getRequest"] === "object" &&
              typeof $steps["getRequest"].then === "function"
            ) {
              $steps["getRequest"] = await $steps["getRequest"];
            }
            $steps["setData"] = true
              ? (() => {
                  const actionArgs = {
                    customFunction: async () => {
                      return (() => {
                        const data = $steps.getRequest.data?.response?.data;
                        $state.stocks.forEach((item, index) => {
                          const stock = data.find(
                            i => i.symbol === `${item.symbol}.XMEX`
                          );
                          if (!stock) {
                            console.log(item.symbol);
                            return;
                          }
                          const { close, open } = stock;
                          $state.stocks[index].price = close;
                          const percent = ((close - open) / open) * 100;
                          $state.stocks[index].percent = percent.toFixed(2);
                        });
                        return ($state.loading = false);
                      })();
                    }
                  };
                  return (({ customFunction }) => {
                    return customFunction();
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["setData"] != null &&
              typeof $steps["setData"] === "object" &&
              typeof $steps["setData"].then === "function"
            ) {
              $steps["setData"] = await $steps["setData"];
            }
          }}
        />
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  mainSection: ["mainSection", "body", "initialData"],
  body: ["body"],
  initialData: ["initialData"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRaiz__ArgProps,
          internalVariantPropNames: PlasmicRaiz__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRaiz__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "mainSection") {
    func.displayName = "PlasmicRaiz";
  } else {
    func.displayName = `PlasmicRaiz.${nodeName}`;
  }
  return func;
}

export const PlasmicRaiz = Object.assign(
  // Top-level PlasmicRaiz renders the root element
  makeNodeComponent("mainSection"),
  {
    // Helper components rendering sub-elements
    body: makeNodeComponent("body"),
    initialData: makeNodeComponent("initialData"),
    // Metadata about props expected for PlasmicRaiz
    internalVariantProps: PlasmicRaiz__VariantProps,
    internalArgProps: PlasmicRaiz__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Root",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicRaiz;
/* prettier-ignore-end */
