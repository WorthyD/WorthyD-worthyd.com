System.register("interfaces/skill", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SkillType;
    return {
        setters: [],
        execute: function () {
            (function (SkillType) {
                SkillType[SkillType["Language"] = 0] = "Language";
                SkillType[SkillType["Application"] = 1] = "Application";
                SkillType[SkillType["Framework"] = 2] = "Framework";
            })(SkillType || (SkillType = {}));
            exports_1("SkillType", SkillType);
        }
    };
});
System.register("data/skills", ["interfaces/skill"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var skill_1, MySkills;
    return {
        setters: [
            function (skill_1_1) {
                skill_1 = skill_1_1;
            }
        ],
        execute: function () {
            exports_2("MySkills", MySkills = [
                { name: 'Test 1', content: 'Lorem Ipsum', icon: '', interest: 0, skill: 0, type: skill_1.SkillType.Language },
                { name: 'Test 2', content: 'Lorem Ipsum', icon: '', interest: 0, skill: 0, type: skill_1.SkillType.Framework }
            ]);
        }
    };
});
System.register("pages/skillset", ["vue"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var vue_1, SkillSetPage;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            }
        ],
        execute: function () {
            SkillSetPage = (function () {
                function SkillSetPage() {
                    console.log(vue_1["default"]);
                    console.log('building');
                }
                return SkillSetPage;
            }());
            exports_3("SkillSetPage", SkillSetPage);
        }
    };
});
